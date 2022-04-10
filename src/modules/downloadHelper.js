import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

let downloadFile = () => console.log('ignoring download function for server side')

if (ExecutionEnvironment.canUseDOM) {
    // Used in DuckOutput & JsonOutput
    downloadFile = ({ data, fileName, fileType }) => {
        // Create a blob with the data we want to download as a file
        const blob = new Blob([data], { type: fileType })
        // Create an anchor element and dispatch a click event on it
        // to trigger a download
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    }
}

export default downloadFile