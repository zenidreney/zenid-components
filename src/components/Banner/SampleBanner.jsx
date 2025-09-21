import Banner from "./Banner"

const SampleSingleLineBanner =

    <>

        <Banner text="" variant="success" />
        <Banner text="" variant="warning" />
        <Banner text="" variant="error" />
        <Banner text="" variant="neutral" />
    </>

const SampleMultiLineBanner =

    <>

        <Banner text="" variant="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner text="" variant="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
        <Banner text="" variant="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
        <Banner text="" variant="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
    </>

export { SampleSingleLineBanner, SampleMultiLineBanner }