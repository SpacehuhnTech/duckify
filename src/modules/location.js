import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'

let getLanguage = () => 'nope'

if (ExecutionEnvironment.canUseDOM) {
    getLanguage = () => navigator.language
}

export default getLanguage