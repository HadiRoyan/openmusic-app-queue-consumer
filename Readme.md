# Open Music App - Queue Consumer

This program is part of the [Open Music Api](https://github.com/HadiRoyan/openmuscic-api) that is used as a listener for the message broker (RabbitMQ).

## Installation
1. download or clone project from this repository
2. Set up database (PostgreSQL), message broker (RabbitMQ), and nodemailer (used to send emails)
3. create an .env file and fill in the following values
    ```text
    # node-postgres configuration
    PGUSER=<your postgresql username>
    PGHOST=<your postgresql host>
    PGPASSWORD=<your postgresql password>
    PGDATABASE= <your postgresql database>
    PGPORT=<your postgresql port>

    # nodemailer SMTP authentication
    MAIL_HOST=<your smtp host>
    MAIL_PORT=<your smtp port>
    MAIL_ADDRESS=<your smtp address>
    MAIL_PASSWORD=<your smtp password>

    # Message broker
    RABBITMQ_SERVER=amqp://localhost
    ```
4. Open terminal and run `npm install`
5. Run the program: `node src/consumer.js`