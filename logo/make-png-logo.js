#!/usr/bin/env node

import sharp from 'sharp';

await
sharp('logo.svg')
.resize(200)
.png({ compressionLevel: 9, effort: 10 })
.toFile('logo.png');
