import { NextApiRequest, NextApiResponse } from "next";

// get all recipes from mongodb
const recipyApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const recipes = await Recipe.find({}).sort({
					createdAt: "desc",
				});
				res.status(200).json({ success: true, data: recipes });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const recipe = await Recipe.create(req.body);
				res.status(201).json({ success: true, data: recipe });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
export default recipyApi;
