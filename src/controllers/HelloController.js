class HelloController {
  async index(req, res) {
  return res.json({
      message: 'Hello Dady'
    });
  }
}




export default new HelloController();