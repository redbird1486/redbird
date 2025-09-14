# StorageConnect

This is a monorepo for the StorageConnect application, which includes a mobile app, a web app, and an API.

## Subprojects

- `/mobile`: Expo (React Native) mobile application.
- `/web`: Next.js web application.
- `/api`: Express.js API.
- `/infra`: Docker Compose setup for local development.

## Quickstart

To get started with local development, follow these steps:

1.  **Clone the repository.**

2.  **Set up environment variables.**

    Create a `local.env` file in the root of the project by copying the example file:

    ```bash
    cp local.env.example local.env
    ```

    Fill in the required values in the `local.env` file.

    ### Google Cloud Vision

    To use the image tagging feature, you need to set up Google Cloud Vision:

    1.  **Create a Google Cloud project** and enable the [Cloud Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com).
    2.  **Create a service account.** Go to the [Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts) and create a new service account. Grant it the "Cloud Vision AI User" role.
    3.  **Create a service account key.** After creating the service account, click on it, go to the "Keys" tab, and create a new JSON key. This will download a JSON file to your computer.
    4.  **Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.** In your `local.env` file, set the `GOOGLE_APPLICATION_CREDENTIALS` variable to the absolute path of the JSON key file you downloaded. For example:

        ```
        GOOGLE_APPLICATION_CREDENTIALS=/Users/your-name/secrets/storageconnect-key.json
        ```

    5.  To develop offline without real credentials, you can set `MOCK_VISION=true` in your `local.env` file.

3.  **Install dependencies.**

    ```bash
    npm install
    ```

4.  **Run the development environment.**

    This command will start the API, the web app, and the mobile app concurrently. The API will be running inside a Docker container.

    ```bash
    npm start
    ```

    Alternatively, you can run the services using Docker Compose:

    ```bash
    docker-compose -f infra/docker-compose.dev.yml up --build
    ```
    And then run the mobile and web apps separately:
    ```bash
    npm run start:web
    npm run start:mobile
    ```

## One-line dev command

To run the API, mobile, and web apps locally:

```bash
npm start
```
