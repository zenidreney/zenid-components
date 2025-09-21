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

        <Banner text="Changable" variant="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner text="Banner" variant="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
        <Banner text="Text" variant="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
        <Banner text="by Props" variant="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
    </>

export { SampleSingleLineBanner, SampleMultiLineBanner }