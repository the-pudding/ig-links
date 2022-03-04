const fs = require("fs");
const { resize } = require("jimp");
const jimp = require("jimp");

const pathIn = "images";
const pathOut = "public/assets/images";
const images = fs.readdirSync(pathIn).filter(d => d.includes(".jpg"));

const resizeImage = (file) => {
	return new Promise((resolve, reject) => {
		const src = `${pathIn}/${file}`;
		const dest = `${pathOut}/${file}`;
		const exists = fs.existsSync(src);
		if (exists) return;

		console.log(`- resizing ${file}`);

		jimp.read(src)
			.then(img => {
				img
					.resize(600, jimp.AUTO)
					.quality(70)
					.write(dest, resolve);
			})
			.catch(reject);
	});
};

(async () => {
	for (let file of images) {
		try {
			await resizeImage(file);
		} catch (err) {
			console.log(err);
		}
	}
})();
