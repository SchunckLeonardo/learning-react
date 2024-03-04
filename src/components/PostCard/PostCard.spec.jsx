import { render, screen } from "@testing-library/react"
import { postCardPropsMock } from './mock.js'
import PostCard from '.'

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...postCardPropsMock} />)

        expect(screen.getByRole('img', {title: 'post-title'})).toHaveAttribute('src', postCardPropsMock.cover)
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByText('post-body')).toBeInTheDocument()
    })

    it('should match snapshot', () => {
        const {container} = render(<PostCard {...postCardPropsMock} />)
        expect(container).toMatchSnapshot()
    })
})