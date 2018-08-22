import projects from "./mocks/projects";
export default {
  getHandler(req: any, res: any) {
    console.log(req.url);
    switch (req.url) {
      case "/projects":
        res.send(projects);
        break;
      case "/terrasses":
        res.send(projects[0].terrasses);
        break;
      case "/":
      default:
        res.send("hello world !");
    }
  }
};
