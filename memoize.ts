const memoize = (func: Function) => {
	const cache = new Map()

	return (...args) => {
		const isCacheEqual = args.every(item => {
			return cache.has(item)
		})

		if (isCacheEqual) {
			return cache.get('res')
		}

		const result = func.apply(this, args)

		args.forEach(arg => cache.set(arg, true))
		cache.set("res", result)

		return result
	}
}
