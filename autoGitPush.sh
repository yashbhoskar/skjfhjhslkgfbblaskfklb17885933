#!/bin/bash
git add .
git commit -m "Careers page content added"
expect << EOF
spawn git push origin main
expect "Username for 'https://github.com':"
send "yashbhoskar\r"
expect "Password for 'https://your_username@github.com':"
send "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\r"
expect eof
EOF
