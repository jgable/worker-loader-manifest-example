## Worker loader manifest example

This is a sample reproduction repo for showing that worker-loader assets aren't showing up in manifests.

Run `npm install && npm run example && cat public/javascripts/webpack-manifest.json` to see the repro.

Check out `public/javascripts` for the output files and `assets/javascripts` for the input files. I have a bunch of dependencies that are not necessary but match our projects environment for the repro.
