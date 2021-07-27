import Clipboard from '@react-native-clipboard/clipboard';

const clipBoard = {
    copyText: function (text) {
        try {
            text.toStings();
            Clipboard.setString(text);
            return null;
        } catch (error) {
            return error;
        }
    },
    getText: async function () {
        try {
            const text = await Clipboard.getString();
            return text;
        } catch (error) {
            return error;
        }
    }
};

export default clipBoard;