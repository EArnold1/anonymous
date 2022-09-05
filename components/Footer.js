import { Text } from '@nextui-org/react'
const Footer = () => {

    return (
        <div className={`text-center mb-4`}>
            <Text h1 size={20}>
                contact developer {' '}
                <a href="mailto:talk2arnoldemmanuel@gmail.com" className="text-gray-600 hover:text-gray-700 border-b-2">here</a>
            </Text>
        </div>
    )
}

export default Footer
