export const getFormData = (body: Record<string, unknown>) => {
	const fd = new FormData()

	Object.keys(body).forEach((k) =>
		fd.append(k, body[k as keyof typeof body] as File | string)
	)

	return fd
}
