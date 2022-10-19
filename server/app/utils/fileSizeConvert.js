function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }


function toBytes(size, type)
{
  const types = ["BY", "KB", "MB", "GB", "TB"];

  const key = types.indexOf(type.toUpperCase())
  
  if (typeof key !== "boolean") {
      return  size * 1024 ** key;
  }
  return "invalid type: type must be GB/KB/MB etc.";
}

module.exports = {
    bytesToSize,
    toBytes,
}