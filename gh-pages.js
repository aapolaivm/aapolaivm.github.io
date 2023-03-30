import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/aapolaivm/aapolaivm.github.io.git', // Update to point to your repository
  user: {
   name: 'Aapo Laivamaa', // update to use your name
   email: 'aapo.laivamaa@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);