import prisma from "../../lib/prisma";

async function handler(req, res) {
	const localName = req.query.localname;
	if (req.method === "GET") {
		var name = "";
		switch (localName) {
			case "kathmandu":
				name = "Kathmandu";
				break;
			case "ku":
				name = "Kathmandu University";
				break;
			case "patan":
				name = "Patan";
				break;
			case "lumbini":
				name = "Lumbini";
				break;
		}
		try {
			const data = await prisma.localOffice.findMany({
				where: {
					name: name,
				},
			});
			console.log(data);
			if (data.length !== 0) {
				res.status(200).json({
					response: data,
				});
			} else {
				res.status(404).json({ error: "Data not found" });
			}
		} catch (err) {
			res.status(404).json({ error: err.message });
		}
	}
}

export default handler;
