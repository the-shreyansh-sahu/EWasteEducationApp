import fs from 'fs';
import { execSync } from 'child_process';

// Check if package.json exists
if (fs.existsSync('package.json')) {
  console.log('package.json found.');
  
  // Read and parse package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Check for necessary dependencies
  const requiredDeps = [
    'expo',
    '@react-navigation/native',
    '@react-navigation/bottom-tabs',
    'react-native-paper',
    'react-native-vector-icons',
    '@expo/vector-icons'
  ];
  
  const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
  
  if (missingDeps.length === 0) {
    console.log('All required dependencies are installed.');
  } else {
    console.log('Missing dependencies:', missingDeps.join(', '));
    console.log('Please install the missing dependencies.');
  }
  
  // Check Expo CLI version
  try {
    const expoVersion = execSync('expo --version', { encoding: 'utf8' });
    console.log('Expo CLI version:', expoVersion.trim());
  } catch (error) {
    console.log('Expo CLI is not installed globally. Please install it with: npm install -g expo-cli');
  }
} else {
  console.log('package.json not found. Are you in the correct directory?');
}