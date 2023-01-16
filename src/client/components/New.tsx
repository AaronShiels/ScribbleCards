import { FC, useState } from "react";

const New: FC = () => {
	const [gameId, setName] = useState<string>();
	const handleSubmit = async (): Promise<void> => alert("Coming soon lol");

	return (
		<div className="columns" style={{ marginTop: "8rem" }}>
			<div className="column is-8 is-offset-2">
				<div className="columns">
					<div className="column left" style={{ padding: "2rem" }}>
						<h1 className="title is-1" style={{ fontWeight: 800, letterSpacing: "-2px" }}>
							Scribble Cards
						</h1>
						<h2 className="subtitle colored is-4" style={{ color: "#00d1b2", fontWeight: 500, letterSpacing: "-1px", marginTop: "1em" }}>
							eCards made fun!
						</h2>
						<p style={{ color: "hsla(0, 0%, 0%, 0.33)", fontSize: "1.15rem" }}>
							Scribble Cards is the fun new way to personalise cards for friends or colleagues. And best of all, it's entirely free!
						</p>
					</div>
					<div className="column right has-text-centered" style={{ padding: "2rem" }}>
						<h1 className="title is-4" style={{ fontWeight: 800, letterSpacing: "-1px" }}>
							New Card
						</h1>
						<p className="description" style={{ color: "hsla(0, 0%, 0%, 0.33)", fontSize: "1.15rem", marginTop: "1em", marginBottom: "1em" }}>
							Simply enter the name of the addressee below and click "Create" to get started!
						</p>
						<form onSubmit={handleSubmit}>
							<div className="field">
								<div className="control">
									<input
										className="input is-medium"
										type="text"
										name="name"
										placeholder="John Smith"
										value={gameId}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</div>
							<button type="submit" className="button is-block is-primary is-fullwidth is-medium">
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export { New };
