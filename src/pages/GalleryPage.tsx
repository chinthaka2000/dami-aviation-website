import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { handleRegister } from '../utils/whatsapp';
import { GalleryImage } from '../types/course';
import { getGalleryImageUrl } from '../utils/imageHelpers';
import AnimatedPhotoSlideshow from '../components/AnimatedPhotoSlideshow';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const categories = [
    {
      id: 'facilities',
      name: 'Training Facilities',
      icon: '🏫',
      description: 'State-of-the-art training centers and classrooms',
      coverImage: getGalleryImageUrl('dsc05892', { width: 600, height: 400 })
    },

    {
      id: 'cabin-crew',
      name: 'Cabin Crew Training',
      icon: '👨‍✈️',
      description: 'Comprehensive cabin crew preparation programs',
      coverImage: getGalleryImageUrl('dsc05924', { width: 600, height: 400 })
    },

    {
      id: 'team',
      name: 'Our Team & Students',
      icon: '👥',
      description: 'Meet our experienced instructors and successful students',
      coverImage: getGalleryImageUrl('dsc06071', { width: 600, height: 400 })
    },
    {
      id: 'student-batches',
      name: 'Student Batches',
      icon: '🎓',
      description: 'Our successful student batches and their journey',
      coverImage: getGalleryImageUrl('dsc06071', { width: 600, height: 400 }) // You can update this with a batch photo
    },
    {
      id: 'events',
      name: 'Events & Ceremonies',
      icon: '🎓',
      description: 'Graduation ceremonies and special events',
      coverImage: getGalleryImageUrl('dsc09337', { width: 600, height: 400 })
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety & Rescue Training',
      icon: '🚨',
      description: 'Emergency fire safety procedures and rescue operations',
      coverImage: getGalleryImageUrl('dsc05569', { width: 600, height: 400 })
    },
    {
      id: 'first-aid',
      name: 'Basic First Aid & CPR Training',
      icon: '🏥',
      description: 'Essential first aid skills and medical emergency response',
      coverImage: getGalleryImageUrl('dsc05657', { width: 600, height: 400 })
    },
    {
      id: 'grooming',
      name: 'Professional Grooming & Appearance Standards',
      icon: '👔',
      description: 'Aviation industry appearance standards and grooming',
      coverImage: getGalleryImageUrl('dsc05625', { width: 600, height: 400 })
    },
    {
      id: 'fitness',
      name: 'Physical Fitness Programme',
      icon: '💪',
      description: 'Aviation-specific fitness and conditioning program',
      coverImage: getGalleryImageUrl('dsc05670', { width: 600, height: 400 })
    },
    {
      id: 'water-survival',
      name: 'Water Survival Training',
      icon: '🌊',
      description: 'Emergency water survival techniques and procedures',
      coverImage: getGalleryImageUrl('dsc09510', { width: 600, height: 400 })
    }
  ];

  const galleryImages: GalleryImage[] = [
    // Training Facilities Category
    {
      src: getGalleryImageUrl('dsc05892', { width: 800, height: 600 }),
      title: 'Aviation Training Center',
      description: 'State-of-the-art training facilities with modern equipment',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06041', { width: 800, height: 600 }),
      title: 'Training Session',
      description: 'Hands-on learning experience in our classrooms',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05667', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09404', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09425', { width: 800, height: 600 }),
      title: 'Modern Training Facility',
      description: 'Our well-equipped training center',
      category: 'facilities',
      type: 'image'
    },

    // Cabin Crew Training Category
    {
      src: getGalleryImageUrl('dsc05924', { width: 800, height: 600 }),
      title: 'Cabin Crew Training',
      description: 'Professional cabin crew preparation and service training',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09576', { width: 800, height: 600 }),
      title: 'Cabin Service Training',
      description: 'Real environment training for cabin crew',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05529', { width: 800, height: 600 }),
      title: 'Cabin Crew Training',
      description: 'Professional cabin crew preparation and service training',
      category: 'cabin-crew',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05532', { width: 800, height: 600 }),
      title: 'Cabin Service Training',
      description: 'Real environment training for cabin crew',
      category: 'cabin-crew',
      type: 'image'
    },

    // Our Team & Students Category
    {
      src: getGalleryImageUrl('dsc06071', { width: 800, height: 600 }),
      title: 'DAMI Aviation Students',
      description: 'Our experienced instructors and aviation professionals',
      category: 'team',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09243', { width: 800, height: 600 }),
      title: 'DAMI Aviation',
      description: 'Our official aviation training',
      category: 'team',
      type: 'image'
    },

    // Student Batches Category
    // Batch 1 - Actual Cloudinary images
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678065/2024_06_01_08_07_IMG_0083_gmatgb.jpg',
      title: 'Batch 1 - Group Photo',
      description: 'Our first successful batch of aviation professionals',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678061/2024_06_01_08_07_IMG_0084_paaegu.jpg',
      title: 'Batch 1 - Training Session',
      description: 'Batch 1 students during their intensive training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677883/2024_06_01_08_11_IMG_0157_ju3ghk.jpg',
      title: 'Batch 1 - Training Progress',
      description: 'Students advancing through their aviation training',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678060/2024_06_01_08_07_IMG_0086_lntixz.jpg',
      title: 'Batch 1 - Practical Training',
      description: 'Hands-on aviation training experience',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678059/2024_06_01_08_07_IMG_0088_t8djtr.jpg',
      title: 'Batch 1 - Skills Development',
      description: 'Developing essential aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678057/2024_06_01_08_07_IMG_0087_zgvdl7.jpg',
      title: 'Batch 1 - Training Session',
      description: 'Interactive learning environment',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678056/2024_06_01_08_08_IMG_0089_qqqetr.jpg',
      title: 'Batch 1 - Group Activity',
      description: 'Collaborative learning experience',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678055/2024_06_01_08_08_IMG_0091_dme4fj.jpg',
      title: 'Batch 1 - Professional Development',
      description: 'Building professional aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678053/2024_06_01_08_08_IMG_0094_bjeyuk.jpg',
      title: 'Batch 1 - Training Excellence',
      description: 'Demonstrating training excellence',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678052/2024_06_01_08_08_IMG_0096_n5scwd.jpg',
      title: 'Batch 1 - Student Achievement',
      description: 'Celebrating student achievements',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678051/2024_06_01_08_08_IMG_0098_pstcvi.jpg',
      title: 'Batch 1 - Learning Progress',
      description: 'Students making excellent progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678047/2024_06_01_08_08_IMG_0108_oyx7wk.jpg',
      title: 'Batch 1 - Training Session',
      description: 'Intensive training program in action',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678043/2024_06_01_08_09_IMG_0114_ppbk1u.jpg',
      title: 'Batch 1 - Skill Assessment',
      description: 'Evaluating student progress and skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678024/2024_06_01_08_09_IMG_0123_umpvhd.jpg',
      title: 'Batch 1 - Group Learning',
      description: 'Collaborative learning environment',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677997/2024_06_01_08_10_IMG_0138_hzu8uy.jpg',
      title: 'Batch 1 - Training Excellence',
      description: 'Achieving training excellence standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677991/2024_06_01_08_10_IMG_0144_tzyadk.jpg',
      title: 'Batch 1 - Professional Growth',
      description: 'Students developing professional skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677991/2024_06_01_08_10_IMG_0145_zmesk5.jpg',
      title: 'Batch 1 - Aviation Training',
      description: 'Comprehensive aviation education',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677886/2024_06_01_08_10_IMG_0151_glrgp2.jpg',
      title: 'Batch 1 - Student Success',
      description: 'Celebrating student success stories',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677884/2024_06_01_08_11_IMG_0154_md1nsh.jpg',
      title: 'Batch 1 - Training Program',
      description: 'Comprehensive training program delivery',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677883/2024_06_01_08_11_IMG_0158_xpimn5.jpg',
      title: 'Batch 1 - Learning Journey',
      description: 'Students on their learning journey',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677882/2024_06_01_08_11_IMG_0162_tu9axv.jpg',
      title: 'Batch 1 - Aviation Excellence',
      description: 'Pursuing aviation excellence',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677878/2024_06_01_08_11_IMG_0166_wvjim9.jpg',
      title: 'Batch 1 - Professional Training',
      description: 'Professional aviation training standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677878/2024_06_01_08_11_IMG_0167_qekppb.jpg',
      title: 'Batch 1 - Team Building',
      description: 'Building strong team relationships',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677871/2024_06_01_08_38_IMG_0188_zgfw1q.jpg',
      title: 'Batch 1 - Achievement Ceremony',
      description: 'Recognizing outstanding achievements',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677866/2024_06_01_07_57_IMG_9976_ruzcdw.jpg',
      title: 'Batch 1 - Graduation Day',
      description: 'Celebrating the successful completion of Batch 1',
      category: 'student-batches',
      type: 'image'
    },

    // Batch 2 - Actual Cloudinary images
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677749/DSC08571_nabpp2.jpg',
      title: 'Batch 2 - Group Photo',
      description: 'Our second batch of dedicated aviation students',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677752/DSC08581_o3ugmo.jpg',
      title: 'Batch 2 - Training Session',
      description: 'Batch 2 students during their intensive training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677764/DSC08568_hxayku.jpg',
      title: 'Batch 2 - Professional Development',
      description: 'Building professional aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677773/DSC08559_eegzkp.jpg',
      title: 'Batch 2 - Skills Assessment',
      description: 'Evaluating student progress and skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677777/DSC08554_i8rvi2.jpg',
      title: 'Batch 2 - Training Excellence',
      description: 'Demonstrating training excellence standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677780/DSC08541_skkppv.jpg',
      title: 'Batch 2 - Practical Training',
      description: 'Hands-on aviation training experience',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677781/DSC08529_hzvrse.jpg',
      title: 'Batch 2 - Learning Progress',
      description: 'Students making excellent progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677782/DSC08516_lbciak.jpg',
      title: 'Batch 2 - Group Activity',
      description: 'Collaborative learning environment',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677783/DSC08510_wl2moj.jpg',
      title: 'Batch 2 - Training Program',
      description: 'Comprehensive training program delivery',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677783/DSC08511_mzdh4t.jpg',
      title: 'Batch 2 - Student Success',
      description: 'Celebrating student success stories',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677784/DSC08523_pf5fqj.jpg',
      title: 'Batch 2 - Aviation Training',
      description: 'Comprehensive aviation education',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677787/DSC08482_qmynsa.jpg',
      title: 'Batch 2 - Professional Growth',
      description: 'Students developing professional skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677788/DSC08494_g6qomq.jpg',
      title: 'Batch 2 - Team Building',
      description: 'Building strong team relationships',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677810/DSC08479_yzx4fw.jpg',
      title: 'Batch 2 - Achievement Ceremony',
      description: 'Recognizing the excellence of Batch 2 graduates',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677830/DSC08424_eige9r.jpg',
      title: 'Batch 2 - Training Workshop',
      description: 'Interactive training workshop session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677830/DSC08426_caa8sf.jpg',
      title: 'Batch 2 - Skills Development',
      description: 'Developing essential aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677829/DSC08432_lk7m0g.jpg',
      title: 'Batch 2 - Practical Exercise',
      description: 'Hands-on practical training exercise',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677829/DSC08417_xgnd2r.jpg',
      title: 'Batch 2 - Group Learning',
      description: 'Collaborative group learning session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677817/DSC08450_ygl0jh.jpg',
      title: 'Batch 2 - Training Progress',
      description: 'Students showing excellent training progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677814/DSC08440_q5nlpr.jpg',
      title: 'Batch 2 - Professional Training',
      description: 'Professional aviation training standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677814/DSC08445_evytsb.jpg',
      title: 'Batch 2 - Learning Environment',
      description: 'Positive learning environment',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677813/DSC08462_zkmpty.jpg',
      title: 'Batch 2 - Student Engagement',
      description: 'High level of student engagement',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677811/DSC08457_wit80i.jpg',
      title: 'Batch 2 - Training Session',
      description: 'Intensive training session in progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677810/DSC08463_rpnnqp.jpg',
      title: 'Batch 2 - Skill Assessment',
      description: 'Comprehensive skill assessment session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677864/DSC08589_djswan.jpg',
      title: 'Batch 2 - Group Activity',
      description: 'Team building group activity',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677864/DSC08590_zmz3mc.jpg',
      title: 'Batch 2 - Training Excellence',
      description: 'Demonstrating training excellence',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677863/DSC08587_i1tj2a.jpg',
      title: 'Batch 2 - Professional Development',
      description: 'Continuous professional development',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677861/DSC08598_ohlkc9.jpg',
      title: 'Batch 2 - Learning Journey',
      description: 'Students on their learning journey',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677861/DSC08599_yhiljs.jpg',
      title: 'Batch 2 - Aviation Training',
      description: 'Comprehensive aviation training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677856/DSC08626_wll4e7.jpg',
      title: 'Batch 2 - Student Success',
      description: 'Celebrating student success milestones',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677842/DSC08639_urc5mx.jpg',
      title: 'Batch 2 - Training Workshop',
      description: 'Specialized training workshop session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677839/DSC08641_l9mc3x.jpg',
      title: 'Batch 2 - Practical Learning',
      description: 'Practical hands-on learning experience',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677838/DSC08636_v0p8dn.jpg',
      title: 'Batch 2 - Group Collaboration',
      description: 'Effective group collaboration',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677838/DSC08648_x3rdbl.jpg',
      title: 'Batch 2 - Training Program',
      description: 'Comprehensive training program delivery',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677836/DSC08635_ozixor.jpg',
      title: 'Batch 2 - Student Engagement',
      description: 'Active student engagement in learning',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677834/DSC08645_tipcn6.jpg',
      title: 'Batch 2 - Aviation Excellence',
      description: 'Pursuing aviation excellence standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677834/DSC08662_gtlmlh.jpg',
      title: 'Batch 2 - Final Assessment',
      description: 'Final comprehensive assessment session',
      category: 'student-batches',
      type: 'image'
    },

    // Batch 3 - Actual Cloudinary images
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678275/DJI_0006_copy_iaec1p.jpg',
      title: 'Batch 3 - Group Photo',
      description: 'Our latest batch of aspiring aviation professionals',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678270/DJI_0009_copy_rxv0dy.jpg',
      title: 'Batch 3 - Training Session',
      description: 'Batch 3 students during their intensive training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678261/DJI_0139_copy_gsbnum.jpg',
      title: 'Batch 3 - Aviation Training',
      description: 'Comprehensive aviation training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678239/DJI_0044_copy_xko3kw.jpg',
      title: 'Batch 3 - Professional Development',
      description: 'Building professional aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678217/DJI_0073_copy_rych0p.jpg',
      title: 'Batch 3 - Training Excellence',
      description: 'Demonstrating training excellence standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678198/DJI_0094_copy_n8xsqh.jpg',
      title: 'Batch 3 - Practical Training',
      description: 'Hands-on aviation training experience',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678195/DJI_0103_copy_notqsv.jpg',
      title: 'Batch 3 - Skills Development',
      description: 'Developing essential aviation skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678188/DJI_0138_copy_sinmk0.jpg',
      title: 'Batch 3 - Learning Progress',
      description: 'Students making excellent progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678188/DJI_0137_copy_ehgsao.jpg',
      title: 'Batch 3 - Group Activity',
      description: 'Collaborative learning environment',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678162/DJI_0150_copy_bnkebx.jpg',
      title: 'Batch 3 - Training Workshop',
      description: 'Interactive training workshop session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678148/DJI_0154_copy_byb1bt.jpg',
      title: 'Batch 3 - Professional Growth',
      description: 'Students developing professional skills',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678113/DJI_0192_copy_qkyskp.jpg',
      title: 'Batch 3 - Team Building',
      description: 'Building strong team relationships',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678104/DJI_0304_copy_fjctek.jpg',
      title: 'Batch 3 - Training Program',
      description: 'Comprehensive training program delivery',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678099/DJI_0326_copy_swj81d.jpg',
      title: 'Batch 3 - Student Success',
      description: 'Celebrating student success stories',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678075/DJI_0330_copy_xwc35r.jpg',
      title: 'Batch 3 - Aviation Excellence',
      description: 'Pursuing aviation excellence standards',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678073/DSC07532_copy_o7y9c3.jpg',
      title: 'Batch 3 - Training Session',
      description: 'Intensive training session in progress',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678071/DSC07533_copy_jj507n.jpg',
      title: 'Batch 3 - Skills Assessment',
      description: 'Comprehensive skill assessment session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678066/DSC07531_copy_faq3rr.jpg',
      title: 'Batch 3 - Achievement Ceremony',
      description: 'Batch 3 demonstrating their acquired aviation skills',
      category: 'student-batches',
      type: 'image'
    },

    // Batch 4 - Created from existing photos
    {
      src: getGalleryImageUrl('dsc06071', { width: 800, height: 600 }),
      title: 'Batch 4 - Group Photo',
      description: 'Our fourth batch of dedicated aviation students',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09243', { width: 800, height: 600 }),
      title: 'Batch 4 - Training Session',
      description: 'Batch 4 students during their intensive training program',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05958', { width: 800, height: 600 }),
      title: 'Batch 4 - Graduation Ceremony',
      description: 'Celebrating Batch 4 successful aviation graduates',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05959', { width: 800, height: 600 }),
      title: 'Batch 4 - Awards Ceremony',
      description: 'Recognizing outstanding Batch 4 student achievements',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05960', { width: 800, height: 600 }),
      title: 'Batch 4 - Achievement Recognition',
      description: 'Batch 4 achievement recognition ceremony',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05965', { width: 800, height: 600 }),
      title: 'Batch 4 - Excellence Awards',
      description: 'Batch 4 excellence awards presentation',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05970', { width: 800, height: 600 }),
      title: 'Batch 4 - Success Celebration',
      description: 'Celebrating Batch 4 training success',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05971', { width: 800, height: 600 }),
      title: 'Batch 4 - Graduation Day',
      description: 'Batch 4 graduation day celebration',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05974', { width: 800, height: 600 }),
      title: 'Batch 4 - Final Ceremony',
      description: 'Batch 4 final achievement ceremony',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05924', { width: 800, height: 600 }),
      title: 'Batch 4 - Cabin Crew Training',
      description: 'Batch 4 professional cabin crew preparation',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09576', { width: 800, height: 600 }),
      title: 'Batch 4 - Service Training',
      description: 'Batch 4 cabin service training session',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05529', { width: 800, height: 600 }),
      title: 'Batch 4 - Professional Training',
      description: 'Batch 4 professional aviation training',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05532', { width: 800, height: 600 }),
      title: 'Batch 4 - Skills Development',
      description: 'Batch 4 aviation skills development',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05892', { width: 800, height: 600 }),
      title: 'Batch 4 - Training Facility',
      description: 'Batch 4 training at our aviation center',
      category: 'student-batches',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06041', { width: 800, height: 600 }),
      title: 'Batch 4 - Learning Session',
      description: 'Batch 4 hands-on learning experience',
      category: 'student-batches',
      type: 'image'
    },

    // Events & Ceremonies Category
    {
      src: getGalleryImageUrl('dsc05958', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05959', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05960', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05965', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05970', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05971', { width: 800, height: 600 }),
      title: 'Graduation Ceremony',
      description: 'Celebrating our successful aviation graduates',
      category: 'events',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05974', { width: 800, height: 600 }),
      title: 'Awards Ceremony',
      description: 'Recognizing outstanding student achievements',
      category: 'events',
      type: 'image'
    },

    // Fire Safety & Rescue Training Category
    {
      src: getGalleryImageUrl('dsc05931', { width: 800, height: 600 }),
      title: 'Fire Safety Training',
      description: 'Emergency fire safety procedures and rescue operations',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05926', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05938', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05572', { width: 800, height: 600 }),
      title: 'Emergency Rescue Training',
      description: 'Hands-on rescue training and emergency response',
      category: 'fire-safety',
      type: 'image'
    },

    // Basic First Aid & CPR Training Category
    {
      src: getGalleryImageUrl('dsc05657', { width: 800, height: 600 }),
      title: 'First Aid Training',
      description: 'Essential first aid skills and medical emergency response',
      category: 'first-aid',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09376', { width: 800, height: 600 }),
      title: 'CPR Training Session',
      description: 'Cardiopulmonary resuscitation training and certification',
      category: 'first-aid',
      type: 'image'
    },

    // Professional Grooming & Appearance Standards Category
    {
      src: getGalleryImageUrl('dsc05625', { width: 800, height: 600 }),
      title: 'Professional Grooming',
      description: 'Aviation industry appearance standards and grooming',
      category: 'grooming',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06046', { width: 800, height: 600 }),
      title: 'Uniform Standards',
      description: 'Professional uniform fitting and presentation',
      category: 'grooming',
      type: 'image'
    },

    // Physical Fitness Programme Category
    {
      src: getGalleryImageUrl('dsc05670', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09387', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09396', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09381', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09384', { width: 800, height: 600 }),
      title: 'Physical Fitness Training',
      description: 'Aviation-specific fitness and conditioning program',
      category: 'fitness',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc09388', { width: 800, height: 600 }),
      title: 'Fitness Assessment',
      description: 'Physical fitness evaluation and training sessions',
      category: 'fitness',
      type: 'image'
    },

    // Water Survival Training Category
    {
      src: getGalleryImageUrl('dsc09510', { width: 800, height: 600 }),
      title: 'Water Survival Training',
      description: 'Emergency water survival techniques and procedures',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06178', { width: 800, height: 600 }),
      title: 'Ditching Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc06190', { width: 800, height: 600 }),
      title: 'Water Emergency Training',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05847', { width: 800, height: 600 }),
      title: 'Water Survival Training',
      description: 'Emergency water survival techniques and procedures',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05861', { width: 800, height: 600 }),
      title: 'Ditching Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05883', { width: 800, height: 600 }),
      title: 'Water Safety Training',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    },
    {
      src: getGalleryImageUrl('dsc05827', { width: 800, height: 600 }),
      title: 'Emergency Water Procedures',
      description: 'Water emergency evacuation and survival training',
      category: 'water-survival',
      type: 'image'
    }
  ];

  // Define batch categories
  const batchCategories = [
    {
      id: 'batch-1',
      name: 'Batch 1',
      icon: '🎓',
      description: 'Our first successful batch of aviation professionals',
      coverImage: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678065/2024_06_01_08_07_IMG_0083_gmatgb.jpg'
    },
    {
      id: 'batch-2',
      name: 'Batch 2',
      icon: '🎓',
      description: 'Our second batch of dedicated aviation students',
      coverImage: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754677749/DSC08571_nabpp2.jpg'
    },
    {
      id: 'batch-3',
      name: 'Batch 3',
      icon: '🎓',
      description: 'Our latest batch of aspiring aviation professionals',
      coverImage: 'https://res.cloudinary.com/dzz0qlqve/image/upload/v1754678275/DJI_0006_copy_iaec1p.jpg'
    },
    {
      id: 'batch-4',
      name: 'Batch 4',
      icon: '🎓',
      description: 'Our fourth batch of dedicated aviation students',
      coverImage: getGalleryImageUrl('dsc06071', { width: 600, height: 400 })
    }
  ];

  // Filter images based on selected category and batch
  const filteredImages = selectedBatch
    ? galleryImages.filter(image => {
      if (image.category !== 'student-batches') return false;

      // For Batch 1, check if the title contains "Batch 1"
      if (selectedBatch === 'batch-1') {
        return image.title.includes('Batch 1');
      }

      // For Batch 2, check if the title contains "Batch 2"
      if (selectedBatch === 'batch-2') {
        return image.title.includes('Batch 2');
      }

      // For Batch 3, check if the title contains "Batch 3"
      if (selectedBatch === 'batch-3') {
        return image.title.includes('Batch 3');
      }

      // For Batch 4, check if the title contains "Batch 4"
      if (selectedBatch === 'batch-4') {
        return image.title.includes('Batch 4');
      }

      // For other batches, use the original logic
      return image.src.includes(`batch-${selectedBatch.split('-')[1]}`);
    })
    : selectedCategory
      ? galleryImages.filter(image => image.category === selectedCategory)
      : [];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#0f2942] pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a1929] to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DAMI Aviation Gallery
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our world-class training facilities, aircraft, and the journey of our students
            as they transform into professional aviation experts.
          </p>
        </div>

        {/* Animated Photo Slideshow */}
        <AnimatedPhotoSlideshow />

        {/* Gallery Content */}
        <div className="mb-16">
          {!selectedCategory ? (
            // Category Cards View
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Explore Our Gallery Categories
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Click on any category below to view photos and videos from that section
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="group relative overflow-hidden rounded-xl bg-[#0a1929]/30 backdrop-blur-sm border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedImage(null);
                      setSelectedBatch(null);
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.coverImage}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-white font-bold text-xl">{category.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#B5054A]/80 text-white px-3 py-1 rounded-full">
                          {category.id === 'student-batches' ? '4 batches' : `${galleryImages.filter(img => img.category === category.id).length} items`}
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#B5054A]/80 transition-colors duration-300">
                          <ChevronRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : selectedCategory === 'student-batches' && !selectedBatch ? (
            // Student Batches View - Show batch cards
            <>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedImage(null);
                    setSelectedBatch(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0a1929]/50 hover:bg-[#0a1929]/70 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-[#D4175C]/50"
                >
                  <ChevronLeft size={20} />
                  <span>Back to Categories</span>
                </button>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    🎓 Student Batches
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Select a batch to view their photos
                  </p>
                </div>
                <div className="w-32"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {batchCategories.map((batch) => (
                  <div
                    key={batch.id}
                    className="group relative overflow-hidden rounded-xl bg-[#0a1929]/30 backdrop-blur-sm border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
                    onClick={() => {
                      setSelectedBatch(batch.id);
                      setSelectedImage(null);
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={batch.coverImage}
                        alt={batch.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{batch.icon}</span>
                        <h3 className="text-white font-bold text-xl">{batch.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{batch.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#B5054A]/80 text-white px-3 py-1 rounded-full">
                          {galleryImages.filter(img => {
                            if (img.category !== 'student-batches') return false;
                            if (batch.id === 'batch-1') return img.title.includes('Batch 1');
                            if (batch.id === 'batch-2') return img.title.includes('Batch 2');
                            if (batch.id === 'batch-3') return img.title.includes('Batch 3');
                            if (batch.id === 'batch-4') return img.title.includes('Batch 4');
                            return false;
                          }).length} photos
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#B5054A]/80 transition-colors duration-300">
                          <ChevronRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Selected Category or Batch Gallery View
            <>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => {
                    if (selectedBatch) {
                      // If viewing a batch, go back to batch selection
                      setSelectedBatch(null);
                      setSelectedImage(null);
                    } else {
                      // If viewing a regular category, go back to categories
                      setSelectedCategory(null);
                      setSelectedImage(null);
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0a1929]/50 hover:bg-[#0a1929]/70 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-[#D4175C]/50"
                >
                  <ChevronLeft size={20} />
                  <span>{selectedBatch ? 'Back to Batches' : 'Back to Categories'}</span>
                </button>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedBatch
                      ? `🎓 ${batchCategories.find(batch => batch.id === selectedBatch)?.name}`
                      : `${categories.find(cat => cat.id === selectedCategory)?.icon} ${categories.find(cat => cat.id === selectedCategory)?.name}`
                    }
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {filteredImages.length} {selectedBatch ? 'photos' : 'items'} in this {selectedBatch ? 'batch' : 'category'}
                  </p>
                </div>
                <div className="w-32"></div> {/* Spacer for centering */}
              </div>

              {/* Images Grid for Selected Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-[#0a1929]/30 backdrop-blur-sm border border-white/10 hover:border-[#D4175C]/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B5054A]/20"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#B5054A]/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      {image.type === 'video' ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                    </div>
                    {image.type === 'video' && (
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        VIDEO
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📷</div>
                  <h3 className="text-xl font-semibold text-white mb-2">No images yet</h3>
                  <p className="text-gray-400">Images for this category will be added soon.</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Aviation Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful graduates who have launched their aviation careers with DAMI Aviation's comprehensive training programs.
            </p>
            <button onClick={handleRegister} className="px-8 py-3 bg-[#B5054A] hover:bg-[#D4175C] text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#B5054A]/30 font-medium text-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>

            <div className="bg-[#0a1929]/90 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === selectedImage ? 'bg-[#D4175C]' : 'bg-gray-500'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;