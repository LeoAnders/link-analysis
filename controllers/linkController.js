const Link = require("../models/Link");

const redirect = async (req, res, next)=> {
  let title = req.params.title;
  try {
    let doc = await Link.findOne({ title });
    if(doc){
      res.redirect(doc.url);
    }
    else{
      next()
    }
  } catch (error) {
    res.send("Error retrieving link: " + error);
  }
}


const addLink = async (req, res)=> {
  let link = new Link(req.body);
  try {
    let doc = await link.save();
    res.send("Link successfully added");
  } catch (error) {
    res.render("index");
  }
}

const allLinks = async (req, res)=> {
  try{
    let links = await Link.find({});
    if (links !== null) {
      res.render("all", { links });
    } else {
      res.send("No links found");
    }

  }catch (error){
    res.send(error)

  }
}

module.exports = { redirect, addLink, allLinks };

