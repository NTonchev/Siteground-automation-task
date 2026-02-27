REQUIREMENTS:   
NodeJS - latest version Run - npm install   
Install Playwright - npx playwright install  

RUNNING TESTS:   
Any of those is viable:   
npx playwright test   
npx playwright test --headed   
npx playwright test --ui  

STRUCTURE:   
In folder Elements > dashboard.elements.ts are all the elements / selectors for both tests   
In folder Pages > DashboardPage.ts are all the methods used in both tests   
In folder tests > dashboard.spec.ts are both tests  

NOTE: I have put all the elements and methods in primary files. In real work scenario some of those should be separated in a component like pages for the more generic stuff and the others in specific pages for the particular menu / feature.  
