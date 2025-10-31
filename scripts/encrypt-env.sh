#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔐 Netlify Token Encryption/Decryption Tool"
echo "=========================================="
echo ""

# Check if openssl is installed
if ! command -v openssl &> /dev/null; then
    echo -e "${RED}Error: OpenSSL is not installed.${NC}"
    echo "Please install OpenSSL first:"
    echo "  Ubuntu/Debian: sudo apt-get install openssl"
    echo "  macOS: brew install openssl"
    exit 1
fi

# Menu
echo "What would you like to do?"
echo "1) Encrypt .env file"
echo "2) Decrypt .env.enc file"
echo "3) Create new .env file from template"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        # Encrypt
        if [ ! -f ".env" ]; then
            echo -e "${RED}Error: .env file not found!${NC}"
            echo "Please create a .env file first or use option 3."
            exit 1
        fi

        echo ""
        echo -e "${YELLOW}Encrypting .env file with AES256...${NC}"
        openssl enc -aes-256-cbc -salt -in .env -out .env.enc -pbkdf2
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ Successfully created .env.enc${NC}"
            echo ""
            read -p "Do you want to delete the plain .env file? (y/n): " delete_plain
            if [ "$delete_plain" = "y" ] || [ "$delete_plain" = "Y" ]; then
                rm .env
                echo -e "${GREEN}✓ Deleted .env file${NC}"
                echo -e "${YELLOW}⚠ Remember your encryption password!${NC}"
            else
                echo -e "${YELLOW}⚠ Warning: .env file still exists (not tracked by git)${NC}"
            fi
        else
            echo -e "${RED}✗ Encryption failed${NC}"
            exit 1
        fi
        ;;
    
    2)
        # Decrypt
        if [ ! -f ".env.enc" ]; then
            echo -e "${RED}Error: .env.enc file not found!${NC}"
            exit 1
        fi

        if [ -f ".env" ]; then
            echo -e "${YELLOW}⚠ Warning: .env file already exists${NC}"
            read -p "Overwrite existing .env file? (y/n): " overwrite
            if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
                echo "Cancelled."
                exit 0
            fi
        fi

        echo ""
        echo -e "${YELLOW}Decrypting .env.enc file...${NC}"
        openssl enc -aes-256-cbc -d -in .env.enc -out .env -pbkdf2
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ Successfully decrypted to .env${NC}"
            echo -e "${YELLOW}⚠ Remember: .env is NOT tracked by git${NC}"
        else
            echo -e "${RED}✗ Decryption failed (wrong password?)${NC}"
            exit 1
        fi
        ;;
    
    3)
        # Create template
        if [ -f ".env" ]; then
            echo -e "${YELLOW}⚠ Warning: .env file already exists${NC}"
            read -p "Overwrite existing .env file? (y/n): " overwrite
            if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
                echo "Cancelled."
                exit 0
            fi
        fi

        echo ""
        echo "Creating .env template..."
        cat > .env << 'EOF'
# Netlify Deployment Credentials
# Get your token from: https://app.netlify.com/user/applications
# Get your site ID from: Netlify Site Settings → Site information

NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token_here
NETLIFY_SITE_ID=your_netlify_site_id_here
EOF

        echo -e "${GREEN}✓ Created .env template${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Edit .env and add your actual Netlify credentials"
        echo "2. Run this script again and choose option 1 to encrypt"
        ;;
    
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}Done!${NC}"
