#!/bin/bash

# Script to rename DSC images by removing spaces and "copy"
# Changes "DSC05516 copy.jpg" to "DSC05516.jpg"

cd public

echo "Renaming DSC images..."

# Loop through all DSC*copy.jpg files
for file in DSC*\ copy.jpg; do
    if [ -f "$file" ]; then
        # Extract the DSC number (e.g., DSC05516 from "DSC05516 copy.jpg")
        new_name=$(echo "$file" | sed 's/ copy\.jpg$/.jpg/')
        
        echo "Renaming: '$file' -> '$new_name'"
        mv "$file" "$new_name"
    fi
done

echo "Done! All DSC images have been renamed."
echo ""
echo "Renamed files:"
ls -la DSC*.jpg | head -10
echo "..."