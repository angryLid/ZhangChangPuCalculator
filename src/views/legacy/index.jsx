export default () => {
    console.log("%c [import.meta.env]:","background:linear-gradient(#69c,#258, #69c);color:#fff;font-size:14px",import.meta.env)
    return <iframe height="500" width="100%" src={import.meta.env.BASE_URL + 'legacy.html'}></iframe>
}