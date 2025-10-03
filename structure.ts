// structure.ts
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content Hub')
    .items([

      // --- People & Orgs ---
      S.listItem()
        .title('People')
        .child(
          S.list()
            .title('People')
            .items([
              S.documentTypeListItem('alumni').title('Alumni'),
              S.documentTypeListItem('ledgerPerson').title('Vanguard Ledger'),
              S.documentTypeListItem('person').title('Person'),
            ])
        ),
      S.listItem()
        .title('Organizations')
        .child(
          S.list()
            .title('Organizations')
            .items([
              S.documentTypeListItem('collaborator').title('Collaborators / Orgs'),
            ])
        ),

      // --- Media ---
      S.listItem()
        .title('Media')
        .child(
          S.list()
            .title('Media')
            .items([
              S.documentTypeListItem('clip').title('Clips'),
              S.documentTypeListItem('vlog').title('Vlogs'),
              S.documentTypeListItem('podcast').title('Podcasts'),
              S.documentTypeListItem('podcastEpisode').title('Podcast Episodes'),
              S.documentTypeListItem('socialPost').title('Social Posts'),
              S.documentTypeListItem('curatedPost').title('Curated (3rd Party) Posts'),
            ])
        ),

      // --- Writing ---
      S.listItem()
        .title('Writing')
        .child(
          S.list()
            .title('Writing')
            .items([
              S.documentTypeListItem('opEd').title('Op-Eds'),
              // later you can add "essays" or "columns" here if needed
            ])
        ),

      // --- Projects ---
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.documentTypeListItem('project').title('Projects'),
            ])
        ),

      // --- Settings / Objects (optional, can hide if you prefer clean UX) ---
      S.divider(),
      S.listItem()
        .title('Shared Blocks')
        .child(
          S.list()
            .title('Shared Blocks')
            .items([
              S.documentTypeListItem('mediaBlock').title('Media Block'),
              S.documentTypeListItem('narrativeBlock').title('Narrative Block'),
              S.documentTypeListItem('seoBlock').title('SEO Block'),
            ])
        ),
    ])