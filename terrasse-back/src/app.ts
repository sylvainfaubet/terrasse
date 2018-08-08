import projects from './mocks/projects';
export default {
    getHandler(req:any,res:any){
        console.log(req.url);
        switch(req.url){
            case '/projects':
            res.send(projects);
            break;

            default:
            res.send("hello world !");
        }
        
       
    }
}
