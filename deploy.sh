#!/bin/bash

# Portfolio Deployment Script
# This script ensures clean deployment to GitHub Pages

echo "🚀 Starting portfolio deployment..."

# Ensure we're on main branch
git checkout main

# Install dependencies and build
echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

# Deploy to gh-pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your portfolio is live at: https://shahabgeravesh.github.io/Dev-Portfolio/"

# Show current status
echo ""
echo "📊 Current branch status:"
git status
echo ""
echo "📋 Recent commits:"
git log --oneline -3
