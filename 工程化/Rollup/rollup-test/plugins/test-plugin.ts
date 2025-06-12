export default (enforce: 'pre' | 'post') => {
    return {
        name: 'test-plugin',
        enforce,
        buildStart() {
            console.log('build start')
        },

        resolveId(source: string) {
            console.log('resolveId', source)
            return null
        }
    }
}
