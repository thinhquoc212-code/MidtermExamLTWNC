const modules = import.meta.glob('./*.{png,jpg,jpeg,svg,webp}', { eager: true })

const pic = {}

for (const path in modules) {
  // lấy tên file (ví dụ: ./fiendsmith.jpg → fiendsmith)
  const fileName = path.split('/').pop().split('.')[0]

  pic[fileName] = modules[path].default
}

export default pic