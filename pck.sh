#!/bin/bash
#add error handler
gzip -c9 Packages > Packages.gz
bzip2 -c9 Packages > Packages.bz2
echo "Done"
