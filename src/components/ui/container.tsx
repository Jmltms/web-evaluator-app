export const Container = ({ children }: React.ComponentProps<'div'>) => {
    return (
        <>
            <div className="container flex justify-center items-center">
                <div className="flex justify-center items-center mt-10">{children}</div>
            </div>
        </>
    )
}