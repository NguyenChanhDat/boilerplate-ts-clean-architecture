const { execSync } = require('child_process');

try {
  // Try Linux command first
  execSync('npm run dev-linux', { stdio: 'inherit' });
} catch (error) {
  // If Linux command fails, try Windows command
  try {
    execSync('npm run dev-win', { stdio: 'inherit' });
  } catch (winError) {
    console.error('Both run dev commands failed');
    process.exit(1);
  }
}
