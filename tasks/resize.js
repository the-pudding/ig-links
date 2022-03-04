import fs from "fs";
import jimp from "jimp";

const pathIn = "images";
const pathOut = "static/assets/images";
const images = fs.readdirSync(pathIn).filter(d => d.includes(".jpg"));

const resizeImage = (file) => {
	return new Promise((resolve, reject) => {
		const src = `${pathIn}/${file}`;
		const dest = `${pathOut}/${file}`;
		const exists = fs.existsSync(dest);

		if (exists) resolve();
		else {
			console.log(`- resizing ${file}`);

			jimp.read(src)
				.then(img => {
					img
						.resize(600, jimp.AUTO)
						.quality(70)
						.write(dest, resolve);
				})
				.catch(reject);
		}
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
