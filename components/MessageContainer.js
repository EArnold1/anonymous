import { useTheme, Card, Text } from "@nextui-org/react";
import moment from 'moment'
const MessageContainer = ({ text, date }) => {
    const { type } = useTheme();
    return (
        <Card className="border-none">
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
                    Anonymous - [ {moment(date).format('LL')} ]
                </Text>
            </Card.Body>
            <Card.Footer>
                <button
                    className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md' : 'px-3 py-2 bg-gray-200 rounded-md'}>
                    Share Now
                </button>
            </Card.Footer>
        </Card>
    )
}

export default MessageContainer