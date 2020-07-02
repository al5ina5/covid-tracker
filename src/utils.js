export function formatNumber(num) {
    var num = num || 'N/A'
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}