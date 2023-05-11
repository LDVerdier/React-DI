import { useServiceContainer } from ".."

export const Button = () => {
    const {fetchData} = useServiceContainer()

    const handleClick = async () => {
        const data = await fetchData('url')
        console.info(data)
    }

    return <button type="button" onClick={handleClick}>Click me</button>
}