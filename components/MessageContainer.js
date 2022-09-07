import { useTheme, Card, Text, Popover } from "@nextui-org/react";
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
                <Popover placement='top-left'>
                    <Popover.Trigger>
                        <button
                            className={type === 'dark' ? 'px-3 py-2 bg-gray-700 rounded-md opacity-60' : 'px-3 py-2 bg-gray-200 rounded-md opacity-60'}>
                            Share Now
                        </button>
                    </Popover.Trigger>
                    <Popover.Content className='p-3'>
                        <Text>Coming soon.</Text>
                        <Text>Don't forget to share your link 😉.</Text>
                    </Popover.Content>
                </Popover>
            </Card.Footer>
        </Card>
    )
}

export default MessageContainer