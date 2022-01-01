import 'prism-theme-night-owl/build/light-no-italics.css'

export default ({
  ' :not(pre)>code[class*=language-], pre[class*=language-]': {
    color: '#FFF',
    background: '#F7f7f7',
    border: '1px solid #DDD'
  },
  ' h1': {
    fontWeight: 700,
    fontSize: 40,
    marginBottom: 30,
    color: '#293237'
  },
  ' h2': {
    fontSize: 26,
    fontWeight: 300,
    margin: '30px 0 20px 0'
  },
  ' h3': {
    fontSize: 20,
    fontWeight: 500,
    margin: '30px 0 20px 0'
  },
  ' h4': {
    fontSize: 20,
    fontWeight: 500,
    color: '#994cc3'
  },
  ' hr': {
    margin: '30px 0'
  },
  ' em': {
    fontStyle: 'italic',
    color: '#8b8b8b'
  },
  ' strong': {
    fontStyle: 'bold',
    color: '#429F87'
  },
  ' p, li': {
    fontSize: 18,
    lineHeight: '26px',
    ' code': {
      color: '#994cc3',
      background: '#f7f7f7',
      borderRadius: 4,
      padding: '5px 8px',
      fontSize: 16,
      fontWeight: 500
    }
  },
  ' ul': {
    paddingLeft: 20
  }
})
