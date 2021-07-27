import SQLite from 'react-native-sqlite-storage';

const connectDB = {
    connect: function () {
        const connect = SQLite.openDatabase(
            {
                name: 'password',
                location: 'default',
                createFromLocation: '~SQLite.db',
            }, (success) => { console.log('DB connected succesfuly =>', success) },
            error => { console.log("DB connection error " + error) }
        );
        return connect;
    }
};

export default connectDB;