enum SIZE {
    SMALL = 'sm',
    STANDARD = '',
    LARGE = 'lg',
    EXTRA_LARGE = 'xl',
}

export const useSize = (size:SIZE, prefix='') => {
    let normalSize: string = size.toLowerCase()
    if(!Object.values(SIZE).includes(normalSize as SIZE)) return ''
    if(normalSize=='') return ''
    return `${prefix}${normalSize}`
}

export default SIZE