import { useTheme, Card, Text, } from "@nextui-org/react";
import moment from 'moment';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { toast } from "react-toastify";

const MessageContainer = ({ text, date, id }) => {
    const { type } = useTheme();


    const getImage = async () => {
        const node = document.getElementById(`${id}share`);
        try {
            const dataUrl = await toPng(node);
            const date = moment().format('LTS').replace(/\:/g, '')

            download(dataUrl, date.replace(/\s/g, ''));
        } catch (err) {
            toast.error('Something went wrong, try again.');
            console.log(err);
        }
    };

    return (
        <Card className="border-none"
            id={`${id}share`}
        >
            <Card.Header>
                <p>Message</p>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <p>
                    {text}
                </p>
                <Text
                    css={{
                        color: '$neutral'
                    }}
                    className="my-2">
                    Anonymous - {moment(date).fromNow()}
                </Text>
            </Card.Body>
            <Card.Footer>
                <button
                    className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}
                    onClick={getImage}
                >
                    Share
                </button>
            </Card.Footer>
        </Card>
    )
}

export default MessageContainer