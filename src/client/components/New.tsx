import { FC, useState } from "react";

const New: FC = () => {
	const [gameId, setAddressee] = useState<string>();
	const handleSubmit = async (): Promise<void> => alert("Coming soon lol");

	return (
		<div>
			<h1>New</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Addressee</label>
					<input type="text" name="name" placeholder="John Smith" value={gameId} onChange={(e) => setAddressee(e.target.value)} />
				</div>
				<div>
					<button type="submit">Create Card</button>
				</div>
			</form>
		</div>
	);
};

export { New };
