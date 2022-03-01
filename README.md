# Testing in React

Steps:

1. Create React App
    ```sh
    $ cd Desktop/my-projects/
    $ npx create-react-app react-test
    ```
2. Initialize the repository
   Initialize the repository and make necessary clean up.
3. Install required dependencies

```sh
# Navigate to project directory
$ yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme
```

4. Configure enzyme
   This may vary from project to project.  
    Navigate to src folder and create setupTests.js file.

    ```sh
    $ cd src
    $ cd touch setupTests.js
    ```

    Make necessary imports for configuring enzyme adaptor as shown below

    ```js
    // src/setupTests.js
    import { configure } from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    configure({
        adapter: new Adapter(),
        disableLifeCycleMethod: true,
    });
    ```

5. Add test

```js
// development work..
// write test ...
```

6. Testing
   Run test command to run the test.
    ```sh
    $ yarn test
    ```

Reference

-   [x] [https://jestjs.io/](https://jestjs.io/)
-   [x] [https://enzymejs.github.io/enzyme/](https://enzymejs.github.io/enzyme/)
