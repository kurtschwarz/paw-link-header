const parseLinkHeader = (header) => header.split(',')
  .reduce((links, part) => {
    const section = part.split(';')

    if (section.length < 2) {
      return links
    }

    const url = section[0].replace(/<(.*)>/, '$1').trim()
    const rel = section[1].replace(/rel="(.*)"/, '$1').trim()

    links[rel] = url

    return links
  }, {})

~(function pawExtension () {
  class LinkHeaderDynamicValue {
    static identifier = 'com.kurtschwarz.PawExtensions.LinkHeaderDynamicValue'
    static title = 'Link Header'
    static help = 'https://github.com/kurtschwarz/paw-link-header/issues'
    static inputs = [
      InputField('linkHeaderRequest', 'Request', 'Request'),
      DynamicValueInput('linkHeaderRel', 'Rel', 'String'),
    ]

    evaluate (ctx) {
      let lastExchange = this.linkHeaderRequest.getLastExchange()

      if (lastExchange && lastExchange.responseHeaders && lastExchange.responseHeaders['Link']) {
        const links = parseLinkHeader(lastExchange.responseHeaders['Link'] || '')

        if (links.hasOwnProperty(this.linkHeaderRel)) {
          return links[this.linkHeaderRel]
        }
      }

      return ''
    }
  }

  registerDynamicValueClass(LinkHeaderDynamicValue)
})()
