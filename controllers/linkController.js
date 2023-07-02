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
    res.redirect("/")
  } catch (error) {
    res.render("index");
  }
}

const allLinks = async (req, res)=> {
  try{
    let docs = await Link.find({});
    if (docs !== null) {
      res.render("all", { links: docs });
    } else {
      res.send("No links found");
    }
  }catch (error){
    res.send(error)

  }
}


const deleteLink = async (req, res)=> {
  let id = req.params.id
  if(!id){
    id = req.body.id
  }
   try {
    await Link.findByIdAndDelete(id)
    res.redirect("/")
   } catch (error) {
    res.status(404).send(error)
     
   }
 
 }

module.exports = { redirect, addLink, allLinks, deleteLink };

