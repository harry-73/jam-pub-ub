import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const LinksCollection = new Mongo.Collection("links", {
	idGeneration: "MONGO",
});

if (Meteor.isServer) {
	Meteor.publish.stream("links", function () {
		return LinksCollection.find(
			{},
			{ projection: { _id: 1, url: 1, title: 1 } }
		);
	});
}
