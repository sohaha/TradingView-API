const { SocksProxyAgent } = require('socks-proxy-agent')
const { HttpsProxyAgent } = require('https-proxy-agent')

let proxyAgent = null

let reverseProxy = ""

module.exports = () => proxyAgent

module.exports.reverseProxy = () => reverseProxy

module.exports.setReverseProxy = (p) => reverseProxy = p

module.exports.setAgent = (proxy) => {
    if (proxy === '') {
        proxyAgent = null
        return
    }

    if (proxy.includes('http')) {
        proxyAgent = new HttpsProxyAgent(proxy)
        return
    }

    proxyAgent = new SocksProxyAgent(proxy.replace('socks5://', 'socks://'))
}
