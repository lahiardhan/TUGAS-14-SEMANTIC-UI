import "semantic-ui-css/semantic.min.css";
import {
	List,
	Search,
	Icon,
	Header,
	Grid,
	Label,
	Table,
	Menu,
	Feed,
} from "semantic-ui-react";

function App() {
	return (
		<div>
			<br />
			<Grid textAlign="center">
				<Grid.Column width="12">
					<Table celled>
						<Table.Header>
							<Table.Row textAlign="right">
								<Table.HeaderCell colSpan="2">
									<Search placeholder="Search Document"></Search>
								</Table.HeaderCell>
							</Table.Row>
							<Table.Row textAlign="center">
								<Table.HeaderCell>Nama Dcoument</Table.HeaderCell>
								<Table.HeaderCell>Jenis File</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Label ribbon>Panduan Belajar Javascript</Label>
								</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Panduan Belajar CSS</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Panduan Belajar ReactJS</Table.Cell>
								<Table.Cell textAlign="center">PDF</Table.Cell>
							</Table.Row>
						</Table.Body>

						<Table.Footer>
							<Table.Row>
								<Table.HeaderCell colSpan="2">
									<Menu floated="right" pagination>
										<Menu.Item as="a" icon>
											<Icon name="chevron left" />
										</Menu.Item>
										<Menu.Item as="a">1</Menu.Item>
										<Menu.Item as="a">2</Menu.Item>
										<Menu.Item as="a">3</Menu.Item>
										<Menu.Item as="a">4</Menu.Item>
										<Menu.Item as="a" icon>
											<Icon name="chevron right" />
										</Menu.Item>
									</Menu>
								</Table.HeaderCell>
							</Table.Row>
						</Table.Footer>
					</Table>
				</Grid.Column>
			</Grid>

			<Grid textAlign="center" columns={2}>
				<Grid.Column width={9}>
					<Feed>
						<Feed.Event>
							<Feed.Label>
								<img
									src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
									alt=""
								/>
							</Feed.Label>
							<Feed.Content>
								<Feed.Summary>
									<Feed.User>Anton</Feed.User> added you as a friend
									<Feed.Date>3 Hours Ago</Feed.Date>
								</Feed.Summary>
								<Feed.Meta>
									<Feed.Like>
										<Icon name="like" />4 Likes
									</Feed.Like>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>

						<Feed.Event>
							<Feed.Label icon="pencil" />
							<Feed.Content>
								<Feed.Summary>
									You submitted a new post to the page.
								</Feed.Summary>
								<Feed.Meta>
									<Feed.Date>3 days ago</Feed.Date>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>

						<Feed.Event>
							<Feed.Label icon="" />
							<Feed.Content>
								<Feed.Summary>
									Saya senang belajar bahasa pemrograman.
								</Feed.Summary>
								<Feed.Meta>
									<Feed.Like>11 Likes</Feed.Like>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>

						<Feed.Event>
							<Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
							<Feed.Content>
								<Feed.Date>4 days ago</Feed.Date>
								<Feed.Summary>David added 2 new Image</Feed.Summary>
								<Feed.Extra images>
									<img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" alt=""/>
									<img src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" alt=""/>
								</Feed.Extra>
								<Feed.Meta>
									<Feed.Like>
										<Icon name="like" />2 Likes
									</Feed.Like>
								</Feed.Meta>
							</Feed.Content>
						</Feed.Event>
					</Feed>
				</Grid.Column>

				<Grid.Column width={3} textAlign="left">
					<List>
						<List.Item>
							<Header as="h4">Website Terkait</Header>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.google.com"
									target="_blank"
									rel="noreferrer"
								>
									Google
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.facebook.com"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.semantic-ui.com"
									target="_blank"
									rel="noreferrer"
								>
									Semantic UI
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https://www.niomic.com"
									target="_blank"
									rel="noreferrer"
								>
									Niomic
								</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name="linkify" />
							<List.Content>
								<a
									href="https:/reactjs.org"
									target="_blank"
									rel="noreferrer"
								>
									React
								</a>
							</List.Content>
						</List.Item>
					</List>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default App;
