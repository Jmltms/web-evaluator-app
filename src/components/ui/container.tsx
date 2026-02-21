export const Container = ({ children, className }: React.ComponentProps<'div'>) => {
    return (
        <>
            <div className="container flex justify-center items-center">
                <div className={className}>{children}</div>
            </div>
        </>
    )
}