const { MongoClient } = require('mongodb');

// MongoDB connection configuration
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "loans_db";
const collectionName = "loans";

const client = new MongoClient(uri);

// Sample loan data
const sampleLoans = [
  {
    amount: 50000,
    borrower: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-0123",
    interest_rate: 5.5,
    term_months: 36,
    status: "active",
    loan_type: "personal",
    purpose: "Home improvement",
    monthly_payment: 1506.69,
    remaining_balance: 45000,
    next_payment_date: new Date("2025-02-15"),
    created_at: new Date("2024-11-15"),
    updated_at: new Date()
  },
  {
    amount: 25000,
    borrower: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-555-0124",
    interest_rate: 4.8,
    term_months: 24,
    status: "pending",
    loan_type: "auto",
    purpose: "Vehicle purchase",
    monthly_payment: 1108.97,
    remaining_balance: 25000,
    next_payment_date: new Date("2025-02-01"),
    created_at: new Date("2025-01-15"),
    updated_at: new Date()
  },
  {
    amount: 75000,
    borrower: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1-555-0125",
    interest_rate: 6.2,
    term_months: 48,
    status: "approved",
    loan_type: "business",
    purpose: "Business expansion",
    monthly_payment: 1766.84,
    remaining_balance: 72000,
    next_payment_date: new Date("2025-02-10"),
    created_at: new Date("2024-12-01"),
    updated_at: new Date()
  },
  {
    amount: 15000,
    borrower: "Alice Williams",
    email: "alice.williams@example.com",
    phone: "+1-555-0126",
    interest_rate: 7.1,
    term_months: 18,
    status: "active",
    loan_type: "personal",
    purpose: "Debt consolidation",
    monthly_payment: 906.12,
    remaining_balance: 12000,
    next_payment_date: new Date("2025-02-05"),
    created_at: new Date("2024-08-15"),
    updated_at: new Date()
  },
  {
    amount: 100000,
    borrower: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1-555-0127",
    interest_rate: 5.9,
    term_months: 60,
    status: "rejected",
    loan_type: "mortgage",
    purpose: "Home purchase",
    monthly_payment: 0,
    remaining_balance: 0,
    next_payment_date: null,
    created_at: new Date("2025-01-10"),
    updated_at: new Date(),
    rejection_reason: "Insufficient credit score"
  },
  {
    amount: 35000,
    borrower: "Sarah Davis",
    email: "sarah.davis@example.com",
    phone: "+1-555-0128",
    interest_rate: 4.5,
    term_months: 30,
    status: "completed",
    loan_type: "personal",
    purpose: "Education",
    monthly_payment: 0,
    remaining_balance: 0,
    next_payment_date: null,
    created_at: new Date("2022-01-15"),
    updated_at: new Date(),
    completion_date: new Date("2024-12-15")
  },
  {
    amount: 60000,
    borrower: "David Wilson",
    email: "david.wilson@example.com",
    phone: "+1-555-0129",
    interest_rate: 6.8,
    term_months: 42,
    status: "active",
    loan_type: "business",
    purpose: "Equipment purchase",
    monthly_payment: 1598.45,
    remaining_balance: 55000,
    next_payment_date: new Date("2025-02-20"),
    created_at: new Date("2024-10-01"),
    updated_at: new Date()
  },
  {
    amount: 20000,
    borrower: "Emma Martinez",
    email: "emma.martinez@example.com",
    phone: "+1-555-0130",
    interest_rate: 5.2,
    term_months: 36,
    status: "pending",
    loan_type: "auto",
    purpose: "Vehicle refinance",
    monthly_payment: 602.29,
    remaining_balance: 20000,
    next_payment_date: new Date("2025-02-25"),
    created_at: new Date("2025-01-20"),
    updated_at: new Date()
  }
];

async function seedLoans() {
  console.log('🚀 Starting loan database seeding...');

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');

    const database = client.db(dbName);
    const loansCollection = database.collection(collectionName);

    // Check if collection already has data
    const existingCount = await loansCollection.countDocuments();
    console.log(`📊 Found ${existingCount} existing loans in database`);

    if (existingCount > 0) {
      console.log('⚠️  Database already contains loan data');
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      const answer = await new Promise(resolve => {
        readline.question('Do you want to clear existing data and reseed? (y/N): ', resolve);
      });
      readline.close();

      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        await loansCollection.deleteMany({});
        console.log('🗑️  Cleared existing loan data');
      } else {
        console.log('❌ Seeding cancelled');
        return;
      }
    }

    // Insert sample loans
    const result = await loansCollection.insertMany(sampleLoans);
    console.log(`✅ Successfully inserted ${result.insertedCount} loans!`);

    // Display summary
    const statusCounts = await loansCollection.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
          totalAmount: { $sum: "$amount" }
        }
      }
    ]).toArray();

    console.log('\n📈 Loan Summary by Status:');
    statusCounts.forEach(status => {
      console.log(`   ${status._id}: ${status.count} loans, $${status.totalAmount.toLocaleString()}`);
    });

    const totalAmount = await loansCollection.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]).toArray();

    console.log(`\n💰 Total loan amount: $${totalAmount[0]?.total.toLocaleString() || 0}`);
    console.log('\n🎉 Database seeding completed successfully!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Database connection closed');
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
📚 Loan Database Seeder

Usage: node seed-loans.js [options]

Options:
  --help, -h     Show this help message
  --clear, -c    Clear existing data without prompting

Environment Variables:
  MONGODB_URI    MongoDB connection string (default: mongodb://localhost:27017)
  DB_NAME        Database name (default: loans_db)

Examples:
  node seed-loans.js
  node seed-loans.js --clear
  MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net" node seed-loans.js
  `);
  process.exit(0);
}

// Run the seeder
if (require.main === module) {
  seedLoans().catch(console.error);
}

module.exports = { seedLoans, sampleLoans };